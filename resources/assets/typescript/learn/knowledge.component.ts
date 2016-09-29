import { Component } from '@angular/core';

@Component({
  templateUrl: 'app/learn/knowledge.component.html',
  styleUrls: ['app/learn/knowledge.component.css']
})

export class KnowledgeComponent { 

  knowledgeList = [
    {title: "3D printing", name: "3d_printing"},
    {title: "Advanced search", name: "advanced_search"},
    {title: "banner ad", name: "banner_ad"},
    {title: "Bcc (on e-mail)", name: "bcc_on_email"},
    {title: "Blog", name: "blog"},
    {title: "Bookmark", name: "bookmark"},
    {title: "Browser", name: "browser"},
    {title: "Cache", name: "cache"},
    {title: "Cloud storage", name: "cloud_storage"},
    {title: "cookie", name: "cookie"},
    {title: "e-Book", name: "ebook"},
    {title: "Filtibly", name: "filtibly"},
    {title: "JFW", name: "jfw"},
    {title: "JPG", name: "jpg"},
    {title: "PDF", name: "pdf"},
    {title: "Phishing", name: "phishing"},
    {title: "Podcasting", name: "podcasting"},
    {title: "Preference setting", name: "preference_setting"},
    {title: "refresh/reload", name: "refresh_reload"},
    {title: "remote login", name: "remote_login"},
    {title: "spam", name: "spam"},
    {title: "Spyware", name: "spyware"},
    {title: "torrent", name: "torrent"},
    {title: "wiki", name: "wiki"}
  ];
}