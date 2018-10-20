package com.toursadvisorcr.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/** The type Index controller. */
@Controller
public class IndexController {
  /**
   * Index string.
   *
   * @return the string
   */
  @RequestMapping(value = "/")
  public String index() {
        return "index";
    }
}
