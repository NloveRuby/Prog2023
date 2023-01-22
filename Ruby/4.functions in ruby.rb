#simple function
# provide the param
# funtion name starts in lowercase
# statment ends with end keyword

def add(x,y)
  return x+y
  #you can omit return as the return is last line by default
end

puts add(2,3)


def greet(x)
  # use string interpoation
  puts "hello #{x}"
end

puts greet("Nasr")


# function with default param
def hello(x="nasr",y)
  puts "your name is #{x} and your age is #{y}"
  #Nasr will be printed by defdault
end

puts hello(26)

def hello2(x="nasr",y)
  puts "your name is #{x} and your age is #{y}"
  #you can override the name nasr by providing ("Omar",26)
end

puts hello2("Omar",26)

