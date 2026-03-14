def log_test_result(test_name, success, message=""):
    status = "PASS" if success else "FAIL"
    print(f"[{status}] {test_name}: {message}")
