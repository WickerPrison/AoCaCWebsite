using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AoCaCWebsite
{
    internal class ParseCSV
    {
        string[] headings;
        string quote = "\"";

        public void Parse(string csvName, string txtName)
        {
            StreamReader reader = new StreamReader(@"C:\Users\cobyl\Desktop\Games\AgeOfKings\AoCaCWebsite\ExternalAssets\" + csvName + ".csv");

            using (StreamWriter outputFile = new StreamWriter(@"C:\Users\cobyl\Desktop\Games\AgeOfKings\AoCaCWebsite\ExternalAssets\" + txtName + ".txt"))
            {
                outputFile.WriteLine("{");
                string line = reader.ReadLine();
                headings = line.Split("|");
                while (!reader.EndOfStream)
                {
                    line = reader.ReadLine();
                    outputFile.WriteLine(WriteObject(line));
                    outputFile.WriteLine("\n");
                    if (!reader.EndOfStream) outputFile.WriteLine(",");
                }
                outputFile.WriteLine("}");
            }
        }

        string WriteObject(string line)
        {
            string[] columns = line.Split("|");
            string output = "\t" + quote + columns[0] + quote + ":{";
            for(int i = 1; i < columns.Length; i++)
            {
                output += quote + headings[i] + quote + ":" + quote + columns[i] + quote;
                if (i < columns.Length - 1) output += ",";
            }
            output += "}";
            return output;
        }
    }
}
