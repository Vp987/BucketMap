problem_dic = {
    "printer not working":"check if it  is turn on and connected to internet",
    "can't login":"Make sure you are using correct username and password",
    "internet connection is not working":"restart your modem or router",
    "email not sending":"check that you are using correct email address and server setting"
    }



def handle_request(abc):
    if abc.lower()=="exit":
        return "Goodbye"
    elif abc.lower()== "options":
        option_list ="\n Available opton \n"
        for index , problem in enumerate(problem_dic.keys(),start=1):
            option_list += str(index) + "." + problem + "\n"
        return option_list
    elif abc.lower() in problem_dic :
        return problem_dic[abc]
    else:
        print("sory ! can't understand \n type again ")


while True:
    
    user_input= input("What's your problem? Type 'options' to see posible problems or 'exit' to quit \n ==>")
    response= handle_request(user_input)
    print(response)
    if user_input.lower()=="exit":
        break
