import { Text, View } from 'react-native'
import { styles } from '@/Styles'
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ExibitionPattern = [
    {title: 'Todos os dias', icon: 'calendar-today'}, //Não exibibir calendário
    {title: 'Somente 1 dia específico', icon: 'calendar-star'}, //Exibir calendário para selecionar 1 dia
    {title: 'Faixa de dias específicos', icon: 'calendar-range'}, //Exibir calendário para selecionar início e fim
    {title: 'Dias da semana específicos', icon: 'calendar-clock'}, //Exibir opções de dias da semana
    {title: 'Todos os dias, exceto alguns', icon: 'calendar-remove'}, //Exibir calendário para selecionar dias a excluir
    {title: 'Quantidade de semanas', icon: 'calendar-week'} //Exibir opções para selecionar número de semanas
]

export const DropdownExibitionPattern = () => {
    return (
        <SelectDropdown
            data={ExibitionPattern}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
            }}
            renderButton={(selectedItem, isOpened) => {
                return (
                    <View style={styles.dropdownButtonStyle}>
                        {selectedItem && (
                            <Icon 
                                name={selectedItem.icon} 
                                style={styles.dropdownButtonIconStyle} 
                            />
                        )}
                        <Text style={styles.dropdownButtonTxtStyle}>
                            {(selectedItem && selectedItem.title) || 'Modo de exibição'}
                        </Text>
                        <Icon 
                            name={isOpened ? 'chevron-up' : 'chevron-down'} 
                            style={styles.dropdownButtonArrowStyle} 
                        />
                    </View>
                )
            }}
            renderItem={(item, index, isSelected) => {
                return (
                    <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
                        <Icon 
                            name={item.icon} 
                            style={styles.dropdownItemIconStyle} 
                        />
                        <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                    </View>
                )
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
        />
    )
}