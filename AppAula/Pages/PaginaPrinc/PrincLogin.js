import { Button, Text, View } from "react-native";
import { styles } from './styles'


export default function PrincLogin(props) {

    const redirect = ( page ) => {
        props.navigation.navigate(page);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.defaultText}>
                BEM VINDO
            </Text>
            <View>
                <Button 
                    title="Login" 
                    style={styles.btn}
                    onPress={() => props.navigation.navigate('Login')} />
                <Button 
                    title="SignUp"
                    onPress={() => redirect("SignUp")} />
            </View>
        </View>
    )
}