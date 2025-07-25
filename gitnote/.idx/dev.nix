{ pkgs, ... }:
{
  packages = [
    pkgs.nodejs_20
  ];

  idx.previews.web = {
    command = [
      "npm"
      "run"
      "dev"
      "--"
      "--port"
      "$PORT"
      "--hostname"
      "0.0.0.0"
    ];
    manager = "web";
  };

  # You can add more configurations here, such as:
  # idx.extensions = [ pkgs.vscode-extensions.<extension-name> ];
}