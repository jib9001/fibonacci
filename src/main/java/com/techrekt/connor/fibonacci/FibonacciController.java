package com.techrekt.connor.fibonacci;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class FibonacciController {
    @PostMapping("/fibonacci")
    public int getGretting(@RequestBody String num) {

        return findNextGreaterFibonacci(Integer.parseInt(num));
    }

    private static int findNextGreaterFibonacci(int num) {
        int start = 0, next = 1, current = 0;

        while (current <= num) {
            current = start + next;

            start = next;
            next = current;
        }
        return current;
    }
}
