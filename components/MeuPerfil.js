import React, { Component } from 'react';
import {
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    View,
    Text,
    FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import data from '../json/data.json';
import Imagens from '../images/img'
import Icon from 'react-native-vector-icons/FontAwesome';

class MeuPerfil extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true, 
            dataSourceFilters: [],
            dataSourceExercices: []
        }
    }


    componentDidMount() {
        this.setState({
            isLoading: false,
            dataSourceFilters: data.filters,
            dataSourceExercices: data.exercices
        });
    }


    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.activity}>
                    <ActivityIndicator size="large" color="#fff" />
                </View>
            )
        }

        var idAtividades=0;
        
        return (
            <View style={styles.body}>

                <View style={styles.header}>
                    <TouchableOpacity>
                        <Icon name="bars" size={30} color="#FEFFFF" />
                    </TouchableOpacity>

                    <Text style={styles.titulo}>MEU PERFIL</Text>

                    <TouchableOpacity>
                        <Icon name="cog" size={30} color="#FEFFFF" />
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.postAtividades}>
                        <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
                            data={this.state.dataSourceFilters}
                            renderItem={({ item }) => {
                                idAtividades++;
                                return (
                                    
                                    <LinearGradient colors={['#7F38F4', '#F22B48']} style={styles.iconAtividades}>
                                        {idAtividades == '1' || idAtividades == '3' ?
                                            <Icon name="check-circle" size={20} style={styles.checkIconAtividades} /> : null}
                                        <Image style={styles.icon}
                                            source={Imagens[item.imagem]}
                                        />
                                    </LinearGradient>

                                )
                            }}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>

                    <FlatList showsHorizontalScrollIndicator={false}
                        data={this.state.dataSourceExercices}
                        renderItem={({ item }) => {
                            var time = item.time / 60;
                            return (
                                <View style={styles.postExercicios}>

                                    <View style={styles.backCircleExercicios}>
                                        <Image style={styles.iconExercicios}
                                            source={Imagens[item.imagem]}
                                        />
                                    </View>

                                    <View style={styles.postDateExercicios}>

                                        <Text style={styles.postTitleExercicios}>{item.name}</Text>

                                        <View style={styles.statisticExercicios}>
                                            <Image style={styles.statisticImageExercicios}
                                                source={require('../images/ic_bike.png')}
                                            />
                                            <Text style={styles.textStatisticExercicios}>{item.calories} Kcal</Text>

                                            <Image style={styles.statisticImageExercicios}
                                                source={require('../images/ic_time.png')}
                                            />
                                            {item.time % '60' == 0 ?
                                                <Text style={styles.textStatisticExercicios}>{time} h</Text>
                                                : <Text style={styles.textStatisticExercicios}>{item.time} m</Text>}

                                            <Image style={styles.statisticImageExercicios}
                                                source={require('../images/ic_balance.png')}
                                            />
                                            <Text style={styles.textStatisticExercicios}>{item.weight} Kg</Text>
                                        </View>

                                        <View style={styles.diaExercicios}>
                                            {item.when == 'today' ?
                                                <Text style={[styles.diaTextExercicios, { backgroundColor: '#FD3C29', opacity: 1.0, borderColor: '#FD3C29' }]}>HOJE</Text>
                                                : <Text style={styles.diaTextExercicios}>HOJE</Text>}

                                            {item.when == 'yesterday' ?
                                                <Text style={[styles.diaTextExercicios, { backgroundColor: '#19B996', opacity: 1.0, borderColor: '#19B996' }]}>ONTEM</Text>
                                                : <Text style={styles.diaTextExercicios}>ONTEM</Text>}
                                        </View>

                                    </View>
                                </View>
                            )
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#262F38'
    },

    header: {
        height: 80,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#262F38',
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: '#323C47'

    },

    titulo: {
        fontFamily: 'Montserrat-Light',
        fontSize: 30,
        color: '#FEFFFF'
    },

    postAtividades: {
        margin: 20,
        padding: 10,
        borderRadius: 5,
        height: 100,
        backgroundColor: '#323C47',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'stretch'
    },

    iconAtividades: {
        marginRight: 10,
        padding: 8,
        height: 60,
        width: 60,
        borderRadius: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'stretch'
    },

    icon: {
        alignSelf: 'center'
    },

    checkIconAtividades: {
        paddingTop: 0,
        paddingLeft: 1.5,
        paddingRight: 1,
        backgroundColor: '#fff',
        borderRadius: 20,
        color: "#19B996",
        position: 'absolute',
        right: 0,
        top: 0
    },

    iconExercicios: {
        marginTop: -10,
        alignSelf: 'center'
    },

    postExercicios: {
        margin: 20,
        padding: 10,
        borderRadius: 5,
        height: 120,
        backgroundColor: '#323C47',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },

    backCircleExercicios: {
        height: 100,
        width: 100,
        borderRadius: 120,
        backgroundColor: '#262F38',
        alignItems: 'stretch',
        justifyContent: 'center'
    },

    postTitleExercicios: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        color: '#FEFFFF'
    },

    postDateExercicios: {
        margin: 15,
        alignSelf: 'center',
        justifyContent: 'center'
    },

    statisticExercicios: {
        marginTop: 5,
        flexDirection: 'row'
    },

    statisticImageExercicios: {
        margin: 5

    },

    textStatisticExercicios: {
        fontSize: 11,
        fontFamily: 'Montserrat-Medium',
        color: '#FEFFFF'
    },

    diaExercicios: {
        marginTop: 5,
        flexDirection: 'row',
    },

    diaTextExercicios: {
        fontSize: 11,
        fontFamily: 'Montserrat-Medium',
        color: '#FEFFFF',
        opacity: 0.6,
        borderWidth: 1,
        paddingTop: 3,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 200,
        marginRight: 20,
        borderColor: '#FEFFFF',
        alignSelf: 'center',
        justifyContent: 'center'
    },

    activity: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        opacity: 0.8
    }
});

export default MeuPerfil;