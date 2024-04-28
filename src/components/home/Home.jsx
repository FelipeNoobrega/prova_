import { Text, View, SafeAreaView} from 'react-native';
import { useCarrinho } from '../provider';
import Produto from '../produto/Produto'
export default function Home() {
    const { produtos, valueCarrinho} = useCarrinho();

    const renderItem = ({ item }) => {

        return (
          <Produto
            name={item.name}
            description={item.description}
            price={item.price}
          />
        );
      };

    return(
        <SafeAreaView>
            <View>
                <Text>
                    AXGR Store
                </Text>
            </View>
            <View>
            <FlatList
                data={pessoas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={Divider}
                ListEmptyComponent={() => (
                <></>
                )}
            />
            </View>
            <Footer/>
        </SafeAreaView>
    )
}