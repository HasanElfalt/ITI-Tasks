namespace MauiApp1;

public partial class DialPage : ContentPage
{
	public DialPage()
	{
		InitializeComponent();
	}

	private void Button_Clicked(object sender, EventArgs e)
	{
		Button numBtn = (Button)sender;
		numberLabel.Text += numBtn.Text;
    }

	private void deleteNum(object sender, EventArgs e)
	{
		if(numberLabel.Text.Length > 0) { 
			numberLabel.Text = numberLabel.Text.Remove(numberLabel.Text.Length-1,1);
		}
	}

}