import java.util.*;

public class valid_parenthisis {
    public static boolean isValid(String s){

        Stack<Character> stack = new Stack<>();

        for(Character c : s.toCharArray()){
            if(c == '{')
            stack.push('}');

            else if(c == '[')
            stack.push(']');

            else if(c == '(')
            stack.push(')');

            else if( stack.isEmpty() || stack.pop() != c)
            return false;
        }
        return stack.isEmpty();

    }

    public static void main(String[] args){
        String test = "[{()}]";
        String test_2 = "[{(}]";

        System.out.println(isValid(test));
        System.out.println(isValid(test_2));
    }
  
}

