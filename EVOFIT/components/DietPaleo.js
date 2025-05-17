import { ScrollView, View, Text, Image} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { global } from '../styles/GlobalStyles';


const DietPaleo = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', marginTop: -40 }}>
    <ScrollView contentContainerStyle={global.mainContainer}>

      <View style={global.bannerContainer}>
        <Image
          source={require('../assets/paleo_banner.jpg')}
          style={{ width: '120%', height: 200, marginBottom: 20, marginLeft: '-10%'}}
          resizeMode="cover"
        />

        <Text style={global.bigTitle}>
          Paleo Diet
        </Text>
      </View>

      <Text style={global.textLeft}>
        The Paleo diet is based on the types of foods presumed to have been eaten by early humans —
        primarily consisting of whole foods like lean meats, fish, fruits, vegetables, nuts, and seeds.
      </Text>

      <View style={[global.hr, {marginTop: 20}]}>
        <View style={global.line} />
        <Text style={global.hrText}>What to Eat:</Text>
        <View style={global.line} />
      </View>
      <Text style={global.textLeft}>
        • Grass-fed meats {"\n"}
        • Fish and seafood {"\n"}
        • Fresh fruits and vegetables {"\n"}
        • Nuts and seeds {"\n"}
        • Healthy fats and oils (e.g., olive oil, coconut oil)
      </Text>

      <Image
        source={require('../assets/paleo_foods.jpg')}
        style={{ width: '100%', height: 300, marginVertical: 10 }}
        resizeMode="contain"
      />

      <View style={[global.hr, {marginTop: 20}]}>
        <View style={global.line} />
        <Text style={global.hrText}>What to Avoid:</Text>
        <View style={global.line} />
      </View>
      <Text style={global.textLeft}>
        • Processed foods {"\n"}
        • Grains (wheat, oats, barley) {"\n"}
        • Legumes (beans, lentils, peanuts) {"\n"}
        • Dairy {"\n"}
        • Refined sugar and salt
      </Text>

      <Text style={[global.textLeft, { marginTop: 20 }]}>
        Following the Paleo diet can help with weight loss, improved glucose tolerance, better blood pressure control, and appetite management.
      </Text>

      <Text style={[global.coloredText, { marginTop: 10, fontSize: 16, fontStyle: 'italic' }]}>
        "Eat like a caveman. Live like a champion."
      </Text>
      
    </ScrollView>
    </SafeAreaView>
  );
};

export default DietPaleo;
