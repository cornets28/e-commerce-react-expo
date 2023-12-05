import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <Image
        style={{ width: 150, height: 100 }}
        source={{
          uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
        }}
      />
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "#041E42",
            }}
          >
            Login to your account
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#D0D0D0",
              marginTop: 30,
              gap: 5,
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <MaterialIcons
              name="email"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              placeholder="Enter your email"
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                marginRight: 8,
              }}
              value={email}
              onChange={(text) => setEmail(text)}
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#D0D0D0",
              marginTop: 30,
              gap: 5,
              paddingVertical: 5,
              borderRadius: 5,
              fontSize: email ? 16 : 16,
            }}
          >
            <MaterialIcons
              name="lock"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              placeholder="Enter your password"
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                marginRight: 8,
                fontSize: password ? 16 : 16,
              }}
              value={password}
              secureTextEntry={true}
              onChange={(text) => setPassword(text)}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <Text>Keep me logged in</Text>
          <Text style={{ fontWeight: 500, color: "#007FFF" }}>
            Forgot Password
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <Pressable
            style={{
              width: 200,
              backgroundColor: "#FEBE10",
              borderRadius: 5,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 15,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 16,
              }}
            >
              {" "}
              Login{" "}
            </Text>
          </Pressable>
        </View>

        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 15 }}
        >
          <Text style={{ color: "gray", textAlign: "center", flexShrink: 16 }}>
            Don't have an account?{" "}
            <Text style={{ fontWeight: 500, color: "#007FFF" }}> Sign Up </Text>
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
