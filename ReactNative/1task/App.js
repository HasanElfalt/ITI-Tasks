import { ScrollView, Image } from 'react-native';

export default function App() {

  const images = [
    require('./assets/Images/1.jpg'),
    require('./assets/Images/2.jpg'),
    require('./assets/Images/3.jpg'),
    require('./assets/Images/4.jpg'),
    require('./assets/Images/5.jpg'),
    require('./assets/Images/6.jpg')
  ];
  return (
    <ScrollView horizontal style={{paddingVertical:50, paddingHorizontal:20}}>
      {images.map((img)=>(
        <Image source={img} style={{ width: 300, height:400 }}/>
      ))}
    </ScrollView>
  ); 
}
