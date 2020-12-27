import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Icon} from 'react-native-elements';

import TeacherNavigator from './TeacherNavigator';
import Drawer2 from './Drawer2';
import SeeAnswers from '../TeachersScreen/seeAnswers';

export const TeacherDrawerNavigator = createDrawerNavigator({
 home:{screen:TeacherNavigator,
navigationOptions:{
  drawerIcon:<Icon name="book" type="font-awesome" />
}
},
},
    {
          contentComponent:Drawer2
        },
        {
          initialRouteName :'home'
        })


