import { ScrollView, View, Text, Image} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { global } from '../styles/GlobalStyles';


const DietPaleo = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', marginTop: -40 }}>
      <ScrollView contentContainerStyle={global.mainContainer}>

        <View style={global.bannerContainer}>
          <Image
            source={require('../assets/keto_banner.jpg')} // Add a suitable keto image here
            style={{ width: '120%', height: 200, marginBottom: 20, marginLeft: '-10%' }}
            resizeMode="cover"
          />

          <Text style={global.bigTitle}>
            Keto Diet
          </Text>
        </View>

        <Text style={global.textLeft}>
          The Ketogenic diet is a high-fat, low-carbohydrate eating plan designed to shift your body into a state of ketosis — where it burns fat for fuel instead of carbs.
        </Text>

        <View style={[global.hr, { marginTop: 20 }]}>
          <View style={global.line} />
          <Text style={global.hrText}>What to Eat:</Text>
          <View style={global.line} />
        </View>

        <Text style={global.textLeft}>
          • Meat and poultry {"\n"}
          • Fatty fish (salmon, tuna, sardines) {"\n"}
          • Eggs {"\n"}
          • Low-carb vegetables (broccoli, spinach, kale) {"\n"}
          • Healthy fats (avocado, butter, olive oil, nuts)
        </Text>

        <Image
          source={require('../assets/keto_foods.jpg')} // Add this image in your assets folder
          style={{ width: '100%', height: 600, marginVertical: 10 }}
          resizeMode="contain"
        />

        <View style={[global.hr, { marginTop: 20 }]}>
          <View style={global.line} />
          <Text style={global.hrText}>What to Avoid:</Text>
          <View style={global.line} />
        </View>

        <Text style={global.textLeft}>
          • Sugary foods and drinks {"\n"}
          • Grains and starches {"\n"}
          • Fruit (except small portions of berries) {"\n"}
          • Beans and legumes {"\n"}
          • Root vegetables (potatoes, carrots)
        </Text>

        <Text style={[global.textLeft, { marginTop: 20 }]}>
          The Keto diet can support weight loss, reduce blood sugar and insulin levels, and improve mental clarity and energy levels.
        </Text>

        <Text style={[global.coloredText, { marginTop: 10, fontSize: 16, fontStyle: 'italic' }]}>
          "Burn fat. Fuel your life."
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default DietPaleo;
