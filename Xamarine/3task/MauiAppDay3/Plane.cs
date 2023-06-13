using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MauiAppDay3
{
	public class Plane
	{
		public string Destination { get; set; }

		public DateOnly DepartureDate { get; set; }

		public DateOnly ArrivalDate { get; set; }
		
		public string DepartDate
		{
			get { return DepartureDate.ToString("MMM dd, yyyy"); }
		}
		public string ArrDate
		{
			get { return ArrivalDate.ToString("MMM dd, yyyy"); }
		}
	}

}
