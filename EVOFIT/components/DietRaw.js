import { ScrollView, View, Text, Image} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { global } from '../styles/GlobalStyles';


const DietPaleo = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', marginTop: -40 }}>
      <ScrollView contentContainerStyle={global.mainContainer}>

        <View style={global.bannerContainer}>
          <Image
            source={require('../assets/raw_banner.jpg')} // Add a raw food banner image to your assets
            style={{ width: '120%', height: 200, marginBottom: 20, marginLeft: '-10%' }}
            resizeMode="cover"
          />

          <Text style={global.bigTitle}>
            Raw Food Diet
          </Text>
        </View>

        <Text style={global.textLeft}>
          The Raw Food diet consists primarily of unprocessed and uncooked foods. The idea is that heating food destroys vital nutrients and natural enzymes that are beneficial for health.
        </Text>

        <View style={[global.hr, { marginTop: 20 }]}>
          <View style={global.line} />
          <Text style={global.hrText}>What to Eat:</Text>
          <View style={global.line} />
        </View>

        <Text style={global.textLeft}>
          • Fresh fruits and vegetables {"\n"}
          • Nuts and seeds {"\n"}
          • Sprouted grains and legumes {"\n"}
          • Cold-pressed oils {"\n"}
          • Fermented foods (e.g., kimchi, sauerkraut)
        </Text>

        <Image
          source={require('../assets/raw_foods.jpg')} // Add this image to assets
          style={{ width: '100%', height: 300, marginVertical: 10 }}
          resizeMode="contain"
        />

        <View style={[global.hr, { marginTop: 20 }]}>
          <View style={global.line} />
          <Text style={global.hrText}>What to Avoid:</Text>
          <View style={global.line} />
        </View>

        <Text style={global.textLeft}>
          • Cooked or processed foods {"\n"}
          • Refined sugars and flours {"\n"}
          • Pasteurized dairy {"\n"}
          • Meat, poultry, and fish {"\n"}
          • Caffeine and alcohol
        </Text>

        <Text style={[global.textLeft, { marginTop: 20 }]}>
          Advocates of the Raw Food diet claim increased energy, clearer skin, and improved digestion. However, it requires careful planning to ensure nutritional balance.
        </Text>

        <Text style={[global.coloredText, { marginTop: 10, fontSize: 16, fontStyle: 'italic' }]}>
          "Eat clean, eat raw — fuel your body the natural way."
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default DietPaleo;
