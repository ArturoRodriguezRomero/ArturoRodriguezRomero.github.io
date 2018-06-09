---
layout: post
title: "Jekyll Blog Tutorial"
date: 2018-04-21
categories:
  - Web-Design
description: Simple Jekyll Blog with Github Pages.
image: https://www.bookstr.com/sites/default/files/2018-04/book%20art.jpg
image-sm: https://www.bookstr.com/sites/default/files/2018-04/book%20art.jpg

extract: How to create a personal blog with Jekull and Github Pages.
---
## Simple Jekyll Blog with Github Pages.


If you want to create a simple, static personal blog, [Jekyll](https://jekyllrb.com/){:target="_blank"} and [Github Pages](https://pages.github.com/){:target="_blank"} are one of the best solutions.

But first, what is Jekyll?
> Jekyll is a simple, blog-aware, static site generator.

This means that you write your posts with simple [Markdown](https://en.wikipedia.org/wiki/Markdown){:target="_blank"} text and Jekyll converts it to rich and formatted HTML code.
Jekyll will stitch your post's contents with all the templates and components, and generate a static website, which you can upload to Github Pages (For free!).

Jekyll is a [Ruby Gem](https://rubygems.org/){:target="_blank"}. A library programmed in [Ruby](https://www.ruby-lang.org){:target="_blank"}, so you are going to need to install a Ruby environment if you don't already have it.

### Installation

I'm using **Windows**, which makes the installation a little harder than on Linux/MacOS. If you are using one of those, here's a [link](https://jekyllrb.com/docs/installation) to the official documentation.


**1- Download and install [RubyInstaller](https://rubyinstaller.org/downloads/){:target="_blank"}.**

**2- Open a command prompt and type:**

```shell_session
gem install jekyll bundler
```

This should take a little while. Click [here](https://bundler.io/){:target="_blank"} to learn a little bit more about Bundler.

Type this to check if Jekyll has installed properly:

```shell_session
jekyll -v
```

**3- Create a new Jekyll website:**

```shell_session
// Creates a new Jekyll project
jekyll new jekyll-test

// Go to the new directory
cd jekyll-test

// Serves the new Jekyll project on https://localhost:4000
jekyll serve
```

### Using a Theme

**Cool**. You have a Jekyll project running. But let's go a little further. You could build the entire website on your own (and, if you have the time, DO IT!), but there are a ton of Jekyll themes made by the good people of Github.

[themes.jekyllrc.org](https://themes.jekyllrc.org/){:target="_blank"} has a great number of themes from Github, find one you like and fork it or download it.

I've chosen [Travelogue](https://github.com/SalGnt/Travelogue){:target="_blank"} for this demonstration, but feel free to use the one you like the most.

If the theme you are using has **dependencies**, you may need to install them:

```shell_session
bundle install
```

You can **update** your dependencies if you want with:

```shell_session
bundle update
```

### Project Structure

Now, let's take a look a the project's folder structure


<i class="fa fa-file-code-o" aria-hidden="true"></i> **_config.yml** 

Holds most of the page's configuration data and global variables.

<i class="fa fa-folder"></i> **_includes** 

Contains small, reusable pieces of code. Think web components. (Head, footer, profile card, etc.)

<i class="fa fa-folder"></i> **_layouts** 

These are page templates that can contain the different pages, normally separated by page type. (Post, category, contact page)

<i class="fa fa-folder"></i> **_posts** 

Is the folder where you will write your posts. These files must be named YEAR-MONTH-DAY-TITLE.markup/markdown.

<i class="fa fa-folder"></i> **_data** 

A static database that all your pages have access to. You can put .yml, .json and .csv files here!

<i class="fa fa-folder"></i> **_sass** 

Can hold multiple .scss files that will be processed into a single minified .css file.

<i class="fa fa-folder"></i> **_assets** 

Folders and files here will be passed without change when the site is processed. Think .js libraries and images.

<i class="fa fa-folder"></i> **_site** 

This is where the fully built, static page will be output once you build it with:

```shell_session
jekyll build
```

### Liquid Attributes

If you go and take a look at any file in the **_layouts** folder you will see code similar to this:

```ruby
  {% raw %}
  {% if page.reading_time %}
    <p class="post-reading-time">&#126;
        {% capture words %}
          {{ content | number_of_words | minus: 180 }}
        {% endcapture %}
        {% unless words contains "-" %}
          {{ words | plus: 180 | divided_by: 180 | append: " min" }}
        {% endunless %}
    </p>
  {% endif %}
  {% endraw %}
```

So what's with all these **curly brackets**??

These are attributes used by the [Liquid Template Engine](https://shopify.github.io/liquid/){:target="_blank"}, an open source template language written in (you guessed it) Ruby.

This engine allows you to reference configuration, variables and data from anywhere on the website. And even add **logic** to your code.
Let's take a look a the previous code block and add a few comments.

```ruby
  {% raw %}
  # 'page' references the global file _config.yml
  # If the global variable reading_time is set to 'true'
  {% if page.reading_time %}
    <p class="post-reading-time">
      {% capture words %}
        # Capture is a Liquid's function...
        # It will store the result of the block in a variable..
        # Without rendering it.
        # You can use pipes '|' in Liquid
        # Just like you can do on Linux
        # content: the post's content
        # number_of_words: Liquid's function...
        # Returns the number of words of the parameter.
        # minus: substracts value from the parameter
        {{ content | number_of_words | minus: 180 }}
        # Translated to non-Ruby, this would look:
        # number_of_words(content) - 180;
      {% endcapture %}
      # Ruby has really cool grammar!
      # Unless 'words' contains a minus symbol.
      {% unless words contains "-" %}
        # We will add 180 (what we substracted) and divide by 180
        # Probably the number of words/minute the author found appropiate.
        # And we will append ' min' to 'words'.
        {{ words | plus: 180 | divided_by: 180 | append: " min" }}
      {% endunless %}
    </p>
  {% endif %}
  {% endraw %}
```

Just by context, we learn that this block of code shows, on every post, the aproximate time in minutes it will take the reader to finish it.

### Deploying on Github

Deploying on Github is very easy. You are really just pushing a repository, Github does the rest.

1. Build the proyect with:
```shell_session
jekyll build
```
2. Create a repository on Github named **'your-user-name-here.github.io'**. This will be your website's URL.
3. Push the contents of **_site** to the repository.
4. Go for a **coffee** while Github's servers do their thing.
5. You're **done**!


### A Few Tips

* Markdown can be hard to remember when starting your Blog. [Here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet){:target="_blank"}'s a great **cheatsheet** to remember the basics while you write your posts.

* If you don't like the github.io domain on your blog's URL, you can purchase and use a **custom domain**. [Here](https://help.github.com/articles/using-a-custom-domain-with-github-pages/){:target="_blank"}'s how to do it.