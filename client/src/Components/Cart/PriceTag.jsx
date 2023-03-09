import { HStack, Text, useColorModeValue as mode } from '@chakra-ui/react'
export function formatPrice(value, opts = {}) {
  const { locale = 'en-IN', currency = 'INR' } = opts
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
    maximumFractionDigits: 2,
  })
  return formatter.format(value)
}

export const PriceTag = (props) => {
  const { price, currency, original_price, rootProps, priceProps, salePriceProps } = props
  return (
    <HStack spacing="1" {...rootProps}>
      <Price isOnSale={!!original_price} textProps={priceProps}>
        {formatPrice(price, {
          currency,
        })}
      </Price>
      {original_price && (
        <SalePrice {...salePriceProps}>
          {formatPrice(original_price, {
            currency,
          })}
        </SalePrice>
      )}
    </HStack>
  )
}
const Price = (props) => {
  const { isOnSale, children, textProps } = props
  const defaultColor = mode('gray.700', 'gray.400')
  const onSaleColor = mode('gray.400', 'gray.700')
  const color = isOnSale ? onSaleColor : defaultColor
  return (
    <Text
      as="span"
      fontWeight="medium"
      color={color}
      textDecoration={isOnSale ? 'line-through' : 'none'}
      {...textProps}
    >
      {children}
    </Text>
  )
}
const SalePrice = (props) => (
  <Text as="span" fontWeight="semibold" color={mode('gray.800', 'gray.100')} {...props} />
)
