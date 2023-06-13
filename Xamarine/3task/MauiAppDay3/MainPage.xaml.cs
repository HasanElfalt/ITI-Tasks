using System.Collections.ObjectModel;

namespace MauiAppDay3;

public partial class MainPage : ContentPage
{
	public ObservableCollection<Plane> Planes { get; set; }
	public MainPage()
	{
		InitializeComponent();

		Planes = new ObservableCollection<Plane>(){
			new Plane() { Destination="West Hollywood, CA, United States", DepartureDate=new DateOnly(2016, 9, 1), ArrivalDate = new DateOnly(2016, 11, 1) },
			new Plane() { Destination="Santa Monica, CA, United States", DepartureDate=new DateOnly(2016, 9, 1), ArrivalDate = new DateOnly(2016, 11, 1) },
			new Plane() { Destination="Cairo, EG, Egypt", DepartureDate=new DateOnly(2016, 9, 1), ArrivalDate = new DateOnly(2016, 11, 1) },
		};

		planesList.ItemsSource = Planes;
	}

	private void SearchBar_TextChanged(object sender, TextChangedEventArgs e)
	{
		var FilterList = Planes.Where(c => c.Destination.ToLower().StartsWith(e.NewTextValue.ToLower()));
		planesList.ItemsSource = FilterList;
	}

	private void planesList_Refreshing(object sender, EventArgs e)
	{
		Planes.Add(new Plane() { Destination = "West Hollywood, CA, United States", DepartureDate = new DateOnly(2016, 9, 1), ArrivalDate = new DateOnly(2016, 11, 1) });
		Planes.Add(new Plane() { Destination = "Santa Monica, CA, United States", DepartureDate = new DateOnly(2016, 9, 1), ArrivalDate = new DateOnly(2016, 11, 1) });
		Planes.Add(new Plane() { Destination = "Cairo, EG, Egypt", DepartureDate = new DateOnly(2016, 9, 1), ArrivalDate = new DateOnly(2016, 11, 1) });

		planesList.IsRefreshing = false;
		planesList.EndRefresh();
		//planesList.ItemsSource = Planes;
	}


	private async void MenuItem_Clicked(object sender, EventArgs e)
	{
		var res = await DisplayAlert("Delete", (sender as MenuItem).CommandParameter.ToString(), "Delete", "Cancel");

		if (res == true)
		{
			var plane = (sender as MenuItem).CommandParameter as Plane;
			Planes.Remove(plane);
		}
	}

	private void planesList_ItemSelected(object sender, SelectedItemChangedEventArgs e)
	{
		Navigation.PushModalAsync(new DetailsPage(e.SelectedItem as Plane));
	}
}