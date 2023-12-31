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
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.pageWrapper}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
        }}
      />
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.loginText}>Register to your account</Text>
        </View>

        <View style={{ marginTop: 70 }}>
        <View style={styles.inputWrapper}>
          <Entypo
            name="user"
            size={24}
            color="gray"
            style={{ marginLeft: 8 }}
          />
       
          <TextInput
            placeholder="Enter your name"
            style={[styles.textInputStyle, { fontSize: name ? 16 : 16 }]}
            value={name}
            onChange={(text) => setName(text)}
          />
        </View>
      </View>

        <View style={{ marginTop: 10 }}>
          <View style={styles.inputWrapper}>
            <MaterialIcons
              name="email"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              placeholder="Enter your email"
              style={[styles.textInputStyle, { fontSize: email ? 16 : 16 }]}
              value={email}
              onChange={(text) => setEmail(text)}
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View style={styles.inputWrapper}>
            <MaterialIcons
              name="lock"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              placeholder="Enter your password"
              style={[styles.textInputStyle, { fontSize: password ? 16 : 16 }]}
              value={password}
              secureTextEntry={true}
              onChange={(text) => setPassword(text)}
            />
          </View>
        </View>

        <View style={styles.forgotPasswordContainer}>
          <Text>Keep me logged in</Text>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <Pressable style={styles.loginButton}>
            <Text style={styles.loginButtonText}> Register </Text>
          </Pressable>
        </View>

        <Pressable
          onPress={() => navigation.goBack()}
          style={{ marginTop: 15 }}
        >
          <Text style={styles.haveNoAccount}>
            Already have an account?{" "}
            <Text style={styles.forgotPasswordText}> Sign In </Text>
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 100,
  },
  loginText: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 12,
    color: "#041E42",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D0D0D0",
    marginTop: 30,
    gap: 5,
    paddingVertical: 5,
    borderRadius: 5,
  },
  textInputStyle: {
    color: "gray",
    marginVertical: 10,
    width: 300,
    marginRight: 8,
    fontSize: 16,
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  forgotPasswordText: {
    fontWeight: 500,
    color: "#007FFF",
  },
  loginButton: {
    width: 200,
    backgroundColor: "#FEBE10",
    borderRadius: 5,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
  },
  loginButtonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
  },
  haveNoAccount: {
    color: "gray",
    textAlign: "center",
    flexShrink: 16,
  },
});
