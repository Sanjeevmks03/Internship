CREATE DATABASE assign1;
use assign1;

select Project.Pname,count(Employee.Eid)
from Project 
left join Employee ON Project.Pid=Employee.Pid
group by Pname; 


select Project.Pname
from Project 
join Employee ON Project.Pid=Employee.Pid
group by Pname
Having count(Employee.Eid)<>count(Employee.Ename);


select Employee.Ename,Project.Pname
from Project 
join Employee ON Project.Pid=Employee.Pid
order by Project.Pname,Employee.Ename;


