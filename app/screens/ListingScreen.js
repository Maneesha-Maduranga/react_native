import MyCard from "../components/MyCard";
import MySafeArea from "../components/MySafeArea";
import {FlatList} from 'react-native'

function ListingScreen() {

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'IPhone 6',
          description:"Good Condition",
          image:require('../assets/iphone.jpg')
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Iphone X',
          description:"Mint Condition",
          image:require('../assets/iphone.jpg')
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6s',
            title: 'Iphone X',
            description:"Good Condition",
            image:require('../assets/iphone.jpg')
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f67',
            title: 'Iphone X',
            description:"Good Condition",
            image:require('../assets/iphone.jpg')
          },

      ];
      



    return ( 
        <MySafeArea>
             <FlatList
        data={DATA}
        renderItem={({item}) => <MyCard title={item.title} description={item.id} image={item.image}/>}
        keyExtractor={item => item.id}
      />
        </MySafeArea>
     );
}

export default ListingScreen;