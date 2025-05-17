import { ScrollView, View, Text, Image} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { global } from '../styles/GlobalStyles';


const DietPaleo = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', marginTop: -40 }}>
      <ScrollView contentContainerStyle={global.mainContainer}>

        <View style={global.bannerContainer}>
          <Image
            source={require('../assets/medit_banner.jpg')} // Add a suitable banner image
            style={{ width: '120%', height: 200, marginBottom: 20, marginLeft: '-10%' }}
            resizeMode="cover"
          />

          <Text style={global.bigTitle}>
            Mediterranean Diet
          </Text>
        </View>

        <Text style={global.textLeft}>
          The Mediterranean diet is inspired by the traditional eating habits of countries bordering the Mediterranean Sea. It emphasizes fresh, whole foods and healthy fats.
        </Text>

        <View style={[global.hr, { marginTop: 20 }]}>
          <View style={global.line} />
          <Text style={global.hrText}>What to Eat:</Text>
          <View style={global.line} />
        </View>

        <Text style={global.textLeft}>
          • Fruits and vegetables {"\n"}
          • Whole grains and legumes {"\n"}
          • Olive oil {"\n"}
          • Fish and seafood {"\n"}
          • Nuts and seeds {"\n"}
          • Moderate wine consumption
        </Text>

        <Image
          source={require('../assets/medit_foods.jpg')} // Add this image to your assets
          style={{ width: '100%', height: 300, marginVertical: 10 }}
          resizeMode="contain"
        />

        <View style={[global.hr, { marginTop: 20 }]}>
          <View style={global.line} />
          <Text style={global.hrText}>What to Avoid:</Text>
          <View style={global.line} />
        </View>

        <Text style={global.textLeft}>
          • Processed meats {"\n"}
          • Refined grains {"\n"}
          • Added sugars {"\n"}
          • Excessive red meat {"\n"}
          • Highly processed foods
        </Text>

        <Text style={[global.textLeft, { marginTop: 20 }]}>
          The Mediterranean diet has been linked to numerous health benefits, including improved heart health, brain function, and longevity. It’s praised for being both effective and sustainable.
        </Text>

        <Text style={[global.coloredText, { marginTop: 10, fontSize: 16, fontStyle: 'italic' }]}>
          "Eat fresh. Live long. Enjoy life — Mediterranean style."
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default DietPaleo;
