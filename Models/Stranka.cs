namespace BookingSample.Models
{
    public class Stranka
    {
        public int Id { get; set; }
        public string ImeInPriimek { get; set; }
        public DateOnly DateTermina { get; set; }
        public TimeOnly TimeTermina { get; set; }

        public string TipStoritve { get; set; }
        public int TelSt { get; set; }

        public override string ToString()
        {
            return ImeInPriimek + " " + DateTermina + " " + TimeTermina + " "+TipStoritve;
        }
    }
}
