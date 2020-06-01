import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { FnParam } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
  private isLoggedIn: Boolean = false;
  private isSignedUp: Boolean = false;
  private pathParam: String;
  constructor(private rout: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.rout.params.subscribe((params: Params) => {
      this.pathParam = params["arg"];
      if (this.pathParam === "loggedIn") {
        this.isLoggedIn = true;
      } else if (this.pathParam === "signedUp") {
        this.isSignedUp = true;
      }
    });
  }
}
