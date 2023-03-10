import shuffle from 'lodash-es'

const useColor = () => {
    //const colors = ['bg-green-700', 'bg-red-700', 'bg-blue-700', 'bg-yellow-700']
    const colors = ['bg-blue-700']
    const getColor = (index) => colors[index % colors.length]
    return { getColor }
}

export default useColor