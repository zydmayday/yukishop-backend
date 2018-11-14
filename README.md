# yukishop-backend

## how to use

```
npm install
```

run in devlopment mode
```
npm run dev
```
## database

use mysql.

bookshelfjs for data orm.

### table

#### yukishop_customer

- id
- name
- tel
- address
- create_time

#### yukishop_product

- id
- cn_name
- jp_name
- recommend_jp_price
- recommend_cn_price
- maker
- spec
- remark
- create_time
- image

#### yukishop_order

- id
- customer_id: foreign key
- status
- create_time

#### yukishop_order_product

- id
- sold_price
- number
- create_time
- status
- product_id: foreign key
- order_id: foreign key

## how system works

### Customer Page

CRUD for customers.
对客户信息的增删改查。

#### CREATE Customer

Open a new page to input customer info then submit the form for creating,
or,
display customer create form at the top of customer info list, like single page app.
另起一个页面，用来填写客户信息，提交表单，创建客户。
或者，
在展示客户信息列表的最上方（同一页面），显示表单完成添加操作。

#### READ Customer

`Customer Block`: a block for displaying a single customer info and his/her order infos.
`客户块`：客户信息列表中的一个单独的块，用于展示客户基本信息和客户的订单信息。

Show each customer info as a list.
User can also check each customer's orders info in each `Customer Block`.
展示每个客户的信息。
用户同时可以在每个`客户块`中查看客户的所有订单信息。

#### UPDATE Customer

Open a new page when click the link inside `Customer Block`,
or,
just show update form inside `Customer Block` for updating.
当点击`客户块`中的链接时，另起一个页面负责更新操作，
或者，
在`客户块`中完成更新操作。

#### DELETE Customer

Same as UPDATE Customer.

### Product Page

CRUD for products.
对商品信息的增删改查

Same as Customer.

### Order page

CRUD for orders.
对订单信息的增删改查。

#### CREATE Order

1. select customer: autocompletement
2. select product, many times: autocompletement
3. create order

We should let user create mew customer when creating order.
We should also let user create new product when creating order.

#### READ Order

Show order info list.
One `Order Block` contains such infos:

1. order's customer
2. order's status: CREATED, PAID(已付款), HAS_SENT(已发货), FINISHED, CLOSED, etc.
3. products in this order: product's status(NOT_BUY_YET(未进货), HAS_STOCK(有库存), RESERVED(已预约), etc.) should be displayed

#### UPDATE Order

1. change order's customer
2. add new product
3. delete product
4. change product info(sold_price, number, product_status etc.)
5. change order status

#### DELETE Order

Just delete an order.
