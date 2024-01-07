
string[] headingsWithBars = { "Brawl", "Light Weapons", "Heavy Weapons", "Ranged"};
string[] headings = new string[headingsWithBars.Length];

Array.Copy(headingsWithBars, headings, headingsWithBars.Length);
string bars = "||||||||||";
for(int i = 0; i < headingsWithBars.Length; i++)
{
    headingsWithBars[i] += bars;
}
string[] propertyCategories = { "Name", "Skill", "Damage", "Range", "Critical", "Modification Slots", "Encumbrance", "Material", "Price", "Rarity", "Properties" };
string quote = "\"";


Weapons();

void Weapons()
{
    StreamReader reader = new StreamReader(@"C:\Users\cobyl\Desktop\Games\AgeOfKings\AoCaCWebsite\Weapons.csv");


    using (StreamWriter outputFile = new StreamWriter(@"C:\Users\cobyl\Desktop\Games\AgeOfKings\AoCaCWebsite\weapons.txt"))
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
                outputFile.WriteLine("}");
            }
            else
            {
                if(!lineIsHeader)
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
    string output = "\t{";
    for(int i = 0; i < propertyCategories.Length; i++)
    {
        output += quote + propertyCategories[i] + quote + ":" + quote + properties[i] + quote;
        if(i < properties.Length - 1) output += ",";
    }
    output += "}";
    return output;
}

bool IsHeader(string nextLine)
{
    return headingsWithBars.Contains(nextLine);
}
