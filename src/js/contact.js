import { createEl } from "./tab";

export function contactTab(contentDiv) {
  const els = [
    createEl("h1", "Contact"),
    createEl("p", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt veritatis, praesentium fuga dolore assumenda, similique incidunt totam id natus, nulla sed ipsam reiciendis deleniti. Earum excepturi quidem animi iure nam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum consectetur reprehenderit numquam perferendis placeat saepe adipisci molestiae voluptate, voluptatem, sequi officia sunt voluptatum odit facilis soluta tenetur cupiditate quos sit.")
  ];
  contentDiv.append(...els);
}