create table Products(
ProductID int auto_increment primary key,
ProductName varchar(255),
SupplierID int,
CategoryID int,
Unit int,
Price int
);

alter table Products add foreign key (CategoryID) references Categories(CategoryID);

insert into 
Products(ProductName,SupplierID,CategoryID,Unit,Price)
value
('Chais',1,1,200,18),
('Chang',1,1,120,19),
('Aniseed Syrup',1,2,50,10),
("Chef Anton's Cajun Seasoning",2,2,45,22),
("Chef Anton's Gumbo Mix",2,4,65,25),
("Grandma's Boysenberry Spread",3,2,78,25),
("Uncle Bob's Organic Dried Pears",3,3,98,30),
('Northwoods Cranberry Sauce',3,2,150,40),
('Mishi Kobe Niku',4,4,230,97),
('Ikura',4,5,45,31);

create table Categories(
CategoryID int auto_increment primary key,
CategoryName varchar(255),
Description text
);
insert into Categories
(CategoryName, Description) values
("Beverages", "Soft drinks, coffees, teas, beers, and ales"),
("Condiments", "Sweet and savory sauces, relishes, spreads, and seasonings"),
("Confections", "Desserts, candies, and sweet breads"),
("Dairy Products", "Cheeses"),
("Grains/Cereals", "Breads, crackers, pasta, and cereal");

select ProductName from Products where ProductName LIKE '%ch%';
select * from Products having Products.Price>(select AVG(Products.Price) from Products);

select * from Products 
join Categories on Products.CategoryID=Categories.CategoryID
where CategoryName='Condiments';

select CategoryName,COUNT(ProductName) from Products 
join Categories on Products.CategoryID=Categories.CategoryID
group by CategoryName;


Alter table Products
ADD INDEX unit_index ON Products(Unit); 

SELECT * FROM Products
WHERE Unit > 500;
