import { ScrollView, View, Text, Image} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { global } from '../styles/GlobalStyles';


const DietPaleo = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', marginTop: -40 }}>
      <ScrollView contentContainerStyle={global.mainContainer}>

        <View style={global.bannerContainer}>
          <Image
            source={require('../assets/vegan_banner.jpg')} // Add a vegan banner image here
            style={{ width: '120%', height: 200, marginBottom: 20, marginLeft: '-10%' }}
            resizeMode="cover"
          />

          <Text style={global.bigTitle}>
            Vegan Diet
          </Text>
        </View>

        <Text style={global.textLeft}>
          The Vegan diet is a plant-based eating pattern that excludes all animal products — including meat, dairy, eggs, and even honey — focusing entirely on foods derived from plants.
        </Text>

        <View style={[global.hr, { marginTop: 20 }]}>
          <View style={global.line} />
          <Text style={global.hrText}>What to Eat:</Text>
          <View style={global.line} />
        </View>

        <Text style={global.textLeft}>
          • Fruits and vegetables {"\n"}
          • Legumes (beans, lentils, chickpeas) {"\n"}
          • Whole grains (rice, oats, quinoa) {"\n"}
          • Nuts and seeds {"\n"}
          • Plant-based oils and milk (soy, almond, oat)
        </Text>

        <Image
          source={require('../assets/vegan_foods.jpg')} // Add this vegan image to assets
          style={{ width: '100%', height: 300, marginVertical: 10 }}
          resizeMode="contain"
        />

        <View style={[global.hr, { marginTop: 20 }]}>
          <View style={global.line} />
          <Text style={global.hrText}>What to Avoid:</Text>
          <View style={global.line} />
        </View>

        <Text style={global.textLeft}>
          • Meat and poultry {"\n"}
          • Fish and seafood {"\n"}
          • Dairy products {"\n"}
          • Eggs {"\n"}
          • Animal-derived ingredients (e.g., gelatin, honey)
        </Text>

        <Text style={[global.textLeft, { marginTop: 20 }]}>
          A Vegan diet can reduce your risk of chronic diseases, support ethical choices, and minimize environmental impact — all while offering a nutrient-rich lifestyle.
        </Text>

        <Text style={[global.coloredText, { marginTop: 10, fontSize: 16, fontStyle: 'italic' }]}>
          "Powered by plants. Driven by purpose."
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default DietPaleo;
