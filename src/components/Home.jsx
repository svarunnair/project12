

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Text,
  Button,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { getData, postCart } from '../redux/data/action'

// const allData = {
//   isNew: true,
//   imageURL:"",
//   name: 'Wayfarer Classic',
//   price: 4.5,
//   rating: 4.2,
//   numReviews: 34,
// }




function Home() {

  const allData =useSelector((store)=>store.data.data)
  const dispatch=useDispatch()
  const [sort,setSort]=useState([])

  console.log("allData",allData)


  useEffect(()=>{
    dispatch(getData())
  },[])
  console.log("get Dataaa",getData)


  const handleAddCart=(item)=>{
    item.quant=1
    dispatch(postCart(item))
  }

  const handleSortHigh=()=>{
    let sortData=allData.sort((a,b)=>{
      return (b.price-a.price)
    })
    setSort([...sortData])
  }
 
  const handleSortLow=()=>{
    let sortData=allData.sort((a,b)=>{
      return (a.price-b.price)
    })
    setSort([...sortData])
  }

  const handleMale=()=>{
    let male=allData.filter((item)=>{
      return item.for==="Men"
    })
    setSort(male)
  }

  const handleFemale=()=>{
    let female=allData.filter((item)=>{
      return item.for==="Women"
    })
    setSort(female)
  }

  useEffect(()=>{
    setSort(allData)
  },[allData])




  return (

<>
    <Button onClick={handleSortHigh}>Sort from high</Button>
    <Button onClick={handleSortLow}>Sort from low</Button>
    <Button onClick={handleMale}>Sort Male</Button>
    <Button onClick={handleFemale}>Sort Female</Button>

<>
    {sort?.map((item)=>(
      <>



<Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={('black', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {item.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
        )}

        <Image src={item.image} alt={`Picture of ${item.name}`} roundedTop="lg" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {item.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {item.name}
            </Box>
            {/* <Tooltip 
              label="Add to cart"
              bg="blue"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip> */}
            <Text>Price:{item.price}</Text>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            {/* <Rating rating={item.rating} numReviews={item.numReviews} /> */}
            <Box fontSize="2xl" color={('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                £
              </Box>Amount:{item.price}
              <Button onClick={()=>handleAddCart(item)}>Add to Cart</Button>
              
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
    

      



      </>
      
    ))}





</>
    </>
    
  )
}

export default Home
