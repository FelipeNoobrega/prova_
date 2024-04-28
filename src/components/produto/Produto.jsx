import { Text, View, TouchableOpacity} from 'react-native';
import { useCarrinho } from '../provider';

export default function Produto({name , description, price}) {
    const { handleAcress, handleDecres } = useCarrinho();

    return(
        <View>
            <View>
                <Text>
                    AXGR Store
                </Text>
            </View>
            <View>
                <Text>
                    {name}
                </Text>
                <Text>
                    {description}
                </Text>
                <Text>
                    R${price}
                </Text>
            </View>
            <View>
            <View>
                <TouchableOpacity onPress={handleAcress}>
                        -
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={handleDecres}>
                        +
                </TouchableOpacity>
            </View>
            </View>
        </View>
        
            
    )
}