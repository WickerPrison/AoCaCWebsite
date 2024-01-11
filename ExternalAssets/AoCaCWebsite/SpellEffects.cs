using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AoCaCWebsite
{
    internal class SpellEffects
    {
        string[] headings;
        string quote = "\"";

        public void Start()
        {
            Effects();
        }

        void Effects()
        {
            StreamReader reader = new StreamReader(@"C:\Users\cobyl\Desktop\Games\AgeOfKings\AoCaCWebsite\ExternalAssets\SpellEffects.csv");

            using (StreamWriter outputFile = new StreamWriter(@"C:\Users\cobyl\Desktop\Games\AgeOfKings\AoCaCWebsite\ExternalAssets\spellEffects.txt"))
            {
                outputFile.WriteLine("{");
                string line = reader.ReadLine();
                headings = line.Split("|");
                while (!reader.EndOfStream)
                {
                    line = reader.ReadLine();
                    outputFile.WriteLine(WriteEffect(line));
                    outputFile.WriteLine("\n");
                    if (!reader.EndOfStream) outputFile.WriteLine(",");
                }
                outputFile.WriteLine("}");
            }
        }

        string WriteEffect(string line)
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
