import {StyleSheet, Text, View, Platform} from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/components/PlantlyButton";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { PlantlyImage } from "@/components/PlantlyImage";

export default function OnboardingScreen() {
    const router = useRouter();

    const toggleHasOnboarded = useUserStore(state => state.toggleHadOnboarded);
    const handlePress = () => {
        toggleHasOnboarded();
        router.replace("/")
    }

  return (
    <LinearGradient 
      start={{x:0, y:0}}
      end={{x:1, y: 1}}
      colors={[theme.colorGreen, theme.colorAppleGreen, theme.colorLimeGreen]}
      style={styles.container}

    >
      <StatusBar style="light"/>
      <View>
        <Text style={styles.heading}>Plantly</Text>
        <Text style={styles.tagLine}>Keep you plants healty and hydrated</Text>
      </View>
      <PlantlyImage />
      <PlantlyButton title="Let me in" onPress={handlePress}>Onboarding</PlantlyButton>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
    paddingHorizontal:8
  },
  heading: {
    textAlign:'center',
    fontSize: 42,
    color: theme.colorWhite,
    fontWeight: "bold",
    marginBottom: 12
  },
  tagLine: {
    fontSize: 34,
    color: theme.colorWhite,
    textAlign:'center',
    fontFamily: Platform.select({
      ios: "Caveat-Regular",
      android: "Caveat_400Regular"
    })
  }
});