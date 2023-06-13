namespace MauiAppDay3;

public partial class DetailsPage : ContentPage
{
	public DetailsPage(Plane plane)
	{
		InitializeComponent();

		if(plane != null)
		{
			BindingContext = plane;
		}
	}
}