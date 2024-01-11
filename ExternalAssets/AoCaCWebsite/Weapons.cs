using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AoCaCWebsite
{
    internal class Weapons
    {
        string[] headingsWithBars = ["Brawl", "Light Weapons", "Heavy Weapons", "Ranged"];
        string bars = "||||||||||";
        string[] propertyCategories = [ "Name", "Skill", "Damage", "Range", "Critical", "Modification Slots", "Encumbrance", "Material", "Price", "Rarity", "Properties" ];
        string quote = "\"";
        string[] headings;

        public void Start()
        {
            headings = new string[headingsWithBars.Length];
            Array.Copy(headingsWithBars, headings, headingsWithBars.Length);
            for(int i = 0; i<headingsWithBars.Length; i++)
            {
                headingsWithBars[i] += bars;
            }

            WriteWeapons();
        }

        void WriteWeapons()
        {
            StreamReader reader = new StreamReader(@"C:\Users\cobyl\Desktop\Games\AgeOfKings\AoCaCWebsite\ExternalAssets\Weapons.csv");

            using (StreamWriter outputFile = new StreamWriter(@"C:\Users\cobyl\Desktop\Games\AgeOfKings\AoCaCWebsite\ExternalAssets\weapons.txt"))
            {
                outputFile.WriteLine("{");
                string line = reader.ReadLine();
                while (!reader.EndOfStream)
                {
                    bool lineIsHeader;
                    int index = Array.IndexOf(headingsWithBars, line);
                    if (index != -1)
                    {
                        lineIsHeader = true;
                        outputFile.WriteLine(quote + headings[index] + quote + ":{");
                    }
                    else
                    {
                        lineIsHeader = false;
                        outputFile.WriteLine(WriteWeapon(line));
                    }

                    outputFile.WriteLine("\n");

                    line = reader.ReadLine();
                    if (headingsWithBars.Contains(line))
                    {
                        outputFile.WriteLine("},");
                    }
                    else
                    {
                        if (!lineIsHeader)
                        {
                            outputFile.WriteLine(",");
                        }
                    }
                }
                outputFile.WriteLine(WriteWeapon(line));
                outputFile.WriteLine("}\n}");

            }
        }

        string WriteWeapon(string line)
        {
            string[] properties = line.Split('|');
            string output = "\t" + quote + properties[0] + quote + ":{";
            for (int i = 1; i < propertyCategories.Length; i++)
            {
                output += quote + propertyCategories[i] + quote + ":" + quote + properties[i] + quote;
                if (i < properties.Length - 1) output += ",";
            }
            output += "}";
            return output;
        }
    }
}

