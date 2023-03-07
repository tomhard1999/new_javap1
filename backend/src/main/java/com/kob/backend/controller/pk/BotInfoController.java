package com.kob.backend.controller.pk;

import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

@RequestMapping("/pk/")
public class BotInfoController {

    @RequestMapping("getbotInfo/")
   public Map<String,String> getBotInfo(){
    Map<String,String>map=new HashMap<>();
    map.put("name","tiger");
    map.put("rating","1400");
    return map;
   }
}
