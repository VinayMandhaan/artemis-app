import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Colors, Fonts } from '../../utils/theme';
import Header from '../../components/Header';
import { LinearGradient } from 'react-native-linear-gradient';
import Categories from '../../components/Categories';
import UserList from '../../components/UserList';
import CoachDetails from '../../components/CoachDetails';
import UserTask from '../../components/UserTask';
import CustomText from '../../components/Generics/CustomText';
import styles from './styles';
import axios from 'axios'
import { baseUrl } from '../../utils/baseUrl';
import { getMembers, getUserTasks } from '../../services/users';

const data = [
    { id: 1, title: 'Family', selected: true },
    { id: 2, title: 'New', selected: false },
    { id: 3, title: 'New', selected: false },
    { id: 4, title: 'New', selected: false },
    { id: 5, title: 'New', selected: false },
    { id: 6, title: 'New', selected: false }
];

const Home = () => {
    const [users, setUsers] = useState([])
    const [tasks, setTasks] = useState([])
    const [userTasks, setUserTasks] = useState([])
    const [count, setCount] = useState(0)
    const [selectedUser, setSelectedUser] = useState(null);


    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        await getMembers().then((res) => {
            setUsers(res?.members)
            setSelectedUser(res?.members[0])
            getTasks(res?.members[0])
        }).catch(err => {
            console.log(err)
        })
    }


    const getTasks = async (newData: any) => {
        getUserTasks().then((res) => {
            setTasks(res?.members)
            setCount(res?.members?.count[0]?.completedCount)
            let data = res.members?.data?.filter(x => x.member?._id?.toString() == newData?._id?.toString())
            if (data) {
                setUserTasks(data)
            }
        }).catch(err => {
            console.log(err)
        })

    }

    const selectUser = (index: any) => {
        setSelectedUser(index)
        let data = tasks.data?.filter(x => x.member?._id?.toString() == index?._id?.toString())
        if (data) {
            setUserTasks(data)
        } else {
            setUserTasks([])
        }
    }


    if (users?.length > 0) {
        return (
            <SafeAreaView>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <Header />
                    <LinearGradient colors={['#FFFFFF', '#FFEBEB']}>
                        <Categories data={data} />
                        <View style={[styles.container, {
                            padding: 16
                        }]}>
                            <CustomText title='All members details are available here' fontFamily={Fonts.Font_Primary} color={Colors.headingText} fontSize={14} />
                        </View>
                        <View>
                            {
                                users?.length > 0 && (
                                    <UserList users={users} selectUser={selectUser} />
                                )
                            }
                            <View style={[styles.container, {
                                paddingTop: 16
                            }]}>
                                <CustomText title={selectedUser?.name} fontFamily={Fonts.Font_Semi_Bold} color={'black'} fontSize={18} />
                                <CustomText title={selectedUser?.description} fontFamily={Fonts.Font_Semi_Bold} color={Colors.headingText} fontSize={12} />
                            </View>
                            {
                                <UserTask userData={userTasks ? userTasks : []} count={count} />
                            }
                            <CoachDetails data={selectedUser?.coach} />
                        </View>
                    </LinearGradient>
                </ScrollView>
            </SafeAreaView>
        );
    }

};

export default Home;
