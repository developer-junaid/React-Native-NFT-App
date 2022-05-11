// React Native
import { View, Image, Text } from "react-native";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Constants
import { COLORS, SIZES, SHADOWS, assets } from "../constants";

// Components
import { CircleButton, RectButton } from "../components";

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        ></Image>

        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>

      <Text>NFTCard</Text>
    </View>
  );
};

export default NFTCard;
