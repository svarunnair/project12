// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getCart } from '../redux/data/action'

// function Cart() {

//     const cartData=useSelector((store)=>store.data.getCart)
//     const dispatch=useDispatch()

//     console.log("cartData",cartData)

//     useEffect(()=>{
//         dispatch(getCart())
//     },[])
//   return (
//     <div>Cart
//         {cartData?.map((item)=>(
//             <>
//             {item.name}
//             </>
//         ))}
//     </div>
//   )
// }

// export default Cart







import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  
  Icon,
  chakra,
  Tooltip,
  Text,
  Button,
} from '@chakra-ui/react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, getCart, patchCart } from '../redux/data/action'
import { useEffect, useState } from 'react'



function Cart() {

    const cartData=useSelector((store)=>store.data.getCart)
    const dispatch=useDispatch()
    const[total,setTotal]=useState(0)

    console.log("cartData",cartData)

    useEffect(()=>{
        dispatch(getCart())
    },[])

    const handleRemove=(id)=>{
        console.log("id",id)
        dispatch(deleteCart(id))
    }

    const handleAdd=(id,quant)=>{
        let data={
            quant:quant+1
        }
        dispatch(patchCart(data,id))
    }

    const handleReduce=(id,quant)=>{
       let data={
        quant:quant-1
       }
      dispatch(patchCart(data,id))
    }


    useEffect(()=>{
        let totalAmount=cartData?.reduce((acc,item,index)=>{
            return acc+item.price*item.quant
        },0)
        setTotal(totalAmount)
    },[cartData])

    
    
  return (
<>
 <>Selected Products</>

    
    {cartData?.map((item)=>(
    
        <>
        

        <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={('white', 'gray.800')}
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
              bg="white"
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
            
            <Box fontSize="2xl" color={('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                £
              </Box>
              {item.price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
    <Text>Quantity:{item.quant}</Text>
    <Button onClick={()=>handleRemove(item.id)}>Remove</Button>
    <Button onClick={()=>handleAdd(item.id,item.quant)}>Add</Button>
    <Button onClick={()=>handleReduce(item.id,item.quant)}>Reduce</Button>
    
    

        
        
        
        </>
    ))}
    <Text>Total Amount:{total}</Text>
    
   
    </>
    

  )
}

export default Cart








