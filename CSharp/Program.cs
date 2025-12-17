using System;

namespace HospitalManagementSystem
{
    public delegate decimal BillingStrategy(decimal baseAmount);
    public delegate void NotificationHandler(string message);

    public static class UI
    {
        static string line = new string('-', 60);

        public static void Header(string title)
        {
            Console.WriteLine();
            Console.WriteLine(line);
            Console.WriteLine(title.ToUpper().PadLeft((60 + title.Length) / 2));
            Console.WriteLine(line);
        }

        public static void Section(string title)
        {
            Console.WriteLine();
            Console.WriteLine("[" + title + "]");
        }

        public static void TableStart()
        {
            Console.WriteLine(line);
        }

        public static void TableEnd()
        {
            Console.WriteLine(line);
        }

        public static void Row(string key, string value)
        {
            Console.WriteLine("| " + key.PadRight(20) + " | " + value.PadRight(33) + " |");
        }

        public static void Event(string source, string message)
        {
            Console.WriteLine("EVENT | " + source.PadRight(15) + " | " + message);
        }
    }

    public abstract class Patient
    {
        public int Id { get; set; }
        public string Name { get; set; }

        protected Patient(int id, string name)
        {
            Id = id;
            Name = name;
        }

        public abstract decimal GetBaseTreatmentCost();
    }

    public class RegularPatient : Patient
    {
        public RegularPatient(int id, string name) : base(id, name) { }
        public override decimal GetBaseTreatmentCost() => 1000m;
    }

    public class EmergencyPatient : Patient
    {
        public EmergencyPatient(int id, string name) : base(id, name) { }
        public override decimal GetBaseTreatmentCost() => 2500m;
    }

    public class HospitalManager
    {
        public event NotificationHandler OnBillGenerated;

        public void ProcessPatient(Patient patient, BillingStrategy strategy)
        {
            Console.Clear();

            UI.Header("Patient Processing");

            UI.TableStart();
            UI.Row("Patient ID", patient.Id.ToString());
            UI.Row("Patient Name", patient.Name);
            UI.Row("Patient Type", patient.GetType().Name);
            UI.TableEnd();

            decimal baseCost = patient.GetBaseTreatmentCost();
            decimal finalBill = strategy(baseCost);

            UI.Section("Billing Summary");
            UI.TableStart();
            UI.Row("Base Amount", baseCost.ToString("C"));
            UI.Row("Final Amount", finalBill.ToString("C"));
            UI.TableEnd();

            UI.Section("Notifications");
            NotifyDepartments("Invoice " + patient.Id + " generated | Amount " + finalBill.ToString("C"));
        }

        void NotifyDepartments(string message)
        {
            if (OnBillGenerated != null)
                OnBillGenerated(message);
        }
    }

    public static class Departments
    {
        public static void Accounts(string msg)
        {
            UI.Event("Accounts", msg);
        }

        public static void Pharmacy(string msg)
        {
            UI.Event("Pharmacy", msg);
        }
    }

    class Program
    {
        static int idCounter = 1001;

        static decimal Standard(decimal a) => a;
        static decimal Insurance(decimal a) => a * 0.5m;
        static decimal Senior(decimal a) => a * 0.8m;

        static void Main()
        {
            HospitalManager hospital = new HospitalManager();
            hospital.OnBillGenerated += Departments.Accounts;
            hospital.OnBillGenerated += Departments.Pharmacy;

            while (true)
            {
                Console.Clear();
                UI.Header("Hospital Management System");
                Console.WriteLine("1. Admit Patient");
                Console.WriteLine("2. Exit");
                Console.Write("\nSelect Option: ");

                string choice = Console.ReadLine();
                if (choice == "2")
                    break;

                AdmitPatient(hospital);

                Console.WriteLine("\nPress any key to return to main menu...");
                Console.ReadKey();
            }
        }

        static void AdmitPatient(HospitalManager hospital)
        {
            Console.Clear();

            UI.Header("Patient Admission");

            Console.Write("Patient Name: ");
            string name = Console.ReadLine();

            Console.WriteLine("\nPatient Type");
            Console.WriteLine("1. Regular");
            Console.WriteLine("2. Emergency");
            Console.Write("Choice: ");
            string type = Console.ReadLine();

            Patient patient;
            if (type == "2")
                patient = new EmergencyPatient(idCounter++, name);
            else
                patient = new RegularPatient(idCounter++, name);

            Console.WriteLine("\nBilling Plan");
            Console.WriteLine("1. Standard");
            Console.WriteLine("2. Insurance");
            Console.WriteLine("3. Senior Citizen");
            Console.Write("Choice: ");
            string plan = Console.ReadLine();

            BillingStrategy strategy;
            switch (plan)
            {
                case "2":
                    strategy = Insurance;
                    break;
                case "3":
                    strategy = Senior;
                    break;
                default:
                    strategy = Standard;
                    break;
            }

            hospital.ProcessPatient(patient, strategy);
        }
    }
}
