import { LineChart } from "react-native-gifted-charts"
import { View, Text } from "react-native"
        
export const ProgressScreen = () => {
    const ptData = [
        {value: 10, date: '16/03'},
        {value: 8, date: '17/03'},
        {value: 5, date: '18/03'},
        {
            value: 10, date: '19/03', 
            label: '10 Março',
            labelTextStyle: {color: 'lightgray', width: 60}
        },
        {value: 7, date: '20/03'},
        {value: 7, date: '21/03'},
        {value: 7, date: '22/03'},
        {value: 8, date: '23/03'},
        {value: 8, date: '24/03'},
        {value: 9, date: '25/03'},
        {value: 9, date: '26/03'},
        {value: 8, date: '27/03'},
        {value: 5, date: '28/03'},
        {value: 6, date: '29/03'},
        {value: 8, date: '30/03'},
        {value: 4, date: '31/03'}
    ]
  
  return (
    <View
      style={{
        paddingVertical: 100,
        paddingLeft: 2,
        backgroundColor: 'white'
      }}
    >
        <LineChart
            areaChart
            data={ptData}
            rotateLabel
            width={300}
            hideDataPoints
            spacing={10}
            color="blue"
            thickness={2}
            startFillColor="rgba(20,105,81,0.3)"
            endFillColor="rgba(20,85,81,0.01)"
            startOpacity={0.9}
            endOpacity={0.2}
            initialSpacing={0}
            noOfSections={6}
            maxValue={10}
            yAxisColor="white"
            yAxisThickness={0}
            rulesType="solid"
            rulesColor="gray"
            yAxisTextStyle={{color: 'gray'}}
            yAxisSide='right'
            xAxisColor="lightgray"
            pointerConfig={{
                pointerStripHeight: 160,
                pointerStripColor: 'lightgray',
                pointerStripWidth: 2,
                pointerColor: 'lightgray',
                radius: 6,
                pointerLabelWidth: 100,
                pointerLabelHeight: 90,
                activatePointersOnLongPress: true,
                autoAdjustPointerLabelPosition: false,
                pointerLabelComponent: items => {
                return (
                    <View
                        style={{
                            height: 90,
                            width: 100,
                            justifyContent: 'center',
                            marginTop: -30,
                            marginLeft: -40
                        }}
                    >
                        <Text style={{color: 'white', fontSize: 14, marginBottom:6,textAlign:'center'}}>
                            {items[0].date}
                        </Text>
                        <View style={{paddingHorizontal:14,paddingVertical:6, borderRadius:16, backgroundColor:'white'}}>
                            <Text style={{fontWeight: 'bold',textAlign:'center'}}>
                                {'$' + items[0].value + '.0'}
                            </Text>
                        </View>
                    </View>
                )
                },
            }}
        />
    </View>
  )
}