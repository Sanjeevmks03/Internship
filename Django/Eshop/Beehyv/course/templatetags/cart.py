from django import template

register= template.Library()

@register.filter(name="is_in_cart")
def is_in_cart(product,cart):
    keys=cart.keys()
    for id in keys:
        if int(id)==product.id:
            return True
    return False


@register.filter(name="item_quantity")
def item_quantity(product,cart):
    keys=cart.keys()
    for id in keys:
        if int(id)==product.id:
            return cart.get(id)
    return False

@register.filter(name="price_total")
def price_total(product,cart):
   return product.Discount_price * item_quantity(product,cart)

@register.filter(name="total")
def total(product,cart):
    sum=0
    for p in product:
        sum+=price_total(p,cart)
    return sum