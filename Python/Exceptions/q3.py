class myexception(Exception):
    def __init__(self,msg):
        self.msg=msg

def func():
    try:
        raise myexception('Custom Exception occured...')
    except Exception as e:
        print("Exception is:: ",e)
    print("statement after handling...")

func()