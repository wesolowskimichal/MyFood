import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Product, RootStackParamList } from '../../../types/Types'
import { View, Text, Button, TouchableOpacity, ToastAndroid, Pressable, Image } from 'react-native'
import { BarcodeScanningResult, CameraView, useCameraPermissions } from 'expo-camera'
import { useEffect, useState } from 'react'
import { ApiService } from '../../../services/api/ApiService'
import { styles } from './AddProduct.style'
import { AddProductView } from '../../../views/addProduct/AddProductView'
import { ResponseCode } from '../../../services/api/ResponseCode'
import { BigProductView } from '../../../views/product/BigProductView'
import Loader from '../../../views/loader/Loader'

type AddProductPageProps = NativeStackScreenProps<RootStackParamList, 'AddProduct'>
export const AddProductPage: React.FC<AddProductPageProps> = props => {
  const [facing, setFacing] = useState<'front' | 'back'>('back')
  const [cameraFlash, setCameraFlash] = useState(false)
  const [permission, requestPermission] = useCameraPermissions()
  const [scanning, setScanning] = useState(true)
  const [scannedData, setScannedData] = useState<string | null>(null) // product id
  const [product, setProduct] = useState<Product | null>(null)
  const [localIndex, setLocalIndex] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (props.route.params) {
      /**
       * It is added during navigation
       *
       * @ts-expect-error */
      setLocalIndex(props.route.params.localIndex)
    }
  }, [props.route.params])

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      const productResponse = await ApiService.getProduct(scannedData!)
      setProduct(productResponse.data)
      setLoading(false)
    }
    if (scannedData) {
      fetchProduct()
    }
  }, [scannedData])

  if (!permission) {
    // Camera permissions are still loading.
    return <View />
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.cameraContainer}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    )
  }

  if (loading) {
    return <Loader />
  }

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'))
  }

  const handleBarCodeScanned = ({ type, data }: BarcodeScanningResult) => {
    setScanning(false)
    setScannedData(data)
  }

  const flashIcon = cameraFlash
    ? require('../../../../assets/flash_off_icon.png')
    : require('../../../../assets/flash_on_icon.png')

  return scanning ? (
    <View style={styles.cameraContainer}>
      <Pressable style={styles.flashButton} onPress={() => setCameraFlash(prev => !prev)}>
        <Image style={styles.flashButtonImage} source={flashIcon}></Image>
      </Pressable>
      <CameraView
        style={styles.camera}
        facing={facing}
        onBarcodeScanned={handleBarCodeScanned}
        enableTorch={cameraFlash}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  ) : (
    <View style={styles.wrapper}>
      {product ? (
        <BigProductView
          localProduct={{ product: product, __local_index: localIndex ?? 0 }}
          navigation={props.navigation}
        />
      ) : (
        <>
          <View>
            <Text style={styles.prodNotFoundTextBig}>Product not found</Text>
            <Text style={styles.prodNotFoundTextSmall}>Add porduct info manually</Text>
          </View>
          <AddProductView barcode={scannedData!} />
        </>
      )}
    </View>
  )
}
