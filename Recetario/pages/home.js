import {
  View,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  Pressable,
  ScrollView,
} from 'react-native';

const HomePage = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <Pressable>
              <Image />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
